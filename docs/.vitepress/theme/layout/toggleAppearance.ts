// .vitepress/theme/Layout/toggleAppearance.ts
// https://github.com/unocss/unocss/blob/main/docs/.vitepress/theme/UnoCSSLayout.vue
import { nextTick, provide } from 'vue'
// ����dark��lightʱ��Ķ�Ч
function enableTransitions() {
    return (
        'startViewTransition' in document &&
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    )
}
export function toggleAppearance(isDark) {
    provide(
        'toggle-appearance',
        async ({ clientX: x, clientY: y }: MouseEvent) => {
            //�����֧�ֶ�Чֱ���л�
            if (!enableTransitions()) {
                isDark.value = !isDark.value
                return
            }
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`, //Բ�εİ뾶Ϊ0��λ��Ԫ�ص�ˮƽx����ֱy��λ��
                `circle(${Math.hypot(
                    Math.max(x, innerWidth - x),
                    Math.max(y, innerHeight - y)
                )}px at ${x}px ${y}px)` // ƽ���� hypot
            ]
            // ԭ������ͼת������ View Transitions API startViewTransition
            await document.startViewTransition(async () => {
                isDark.value = !isDark.value
                await nextTick()
            }).ready

            document.documentElement.animate(
                { clipPath: isDark.value ? clipPath.reverse() : clipPath },
                {
                    duration: 300,
                    easing: 'ease-in',
                    pseudoElement: `::view-transition-${
                        isDark.value ? 'old' : 'new'
                    }(root)`
                }
            )
        }
    )
}
