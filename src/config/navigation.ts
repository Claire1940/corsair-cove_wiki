import {
	Calendar,
	Gamepad2,
	Sparkles,
	BookOpen,
	Hammer,
	Users,
	Ship,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// corsair cove 导航分类（7 个内容类型，与 content/ 目录一一对应；community 已删除）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'release', path: '/release', icon: Calendar, isContentType: true },
	{ key: 'platforms', path: '/platforms', icon: Gamepad2, isContentType: true },
	{ key: 'features', path: '/features', icon: Sparkles, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'building', path: '/building', icon: Hammer, isContentType: true },
	{ key: 'crew', path: '/crew', icon: Users, isContentType: true },
	{ key: 'ships', path: '/ships', icon: Ship, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/'

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
