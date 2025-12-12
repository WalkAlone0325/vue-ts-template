import type { HighlightDirective } from '@/types/directive'

export default {
  mounted(el, binding) {
    const { value } = binding
    el.style.backgroundColor = value
  }
} satisfies HighlightDirective
