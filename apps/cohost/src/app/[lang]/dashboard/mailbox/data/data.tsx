import {
	ArrowDownIcon,
	ArrowRightIcon,
	ArrowUpIcon,
	BanIcon,
	CheckCircleIcon,
	CircleHelpIcon,
	CircleIcon,
	LoaderIcon,
} from "lucide-react";
import { Option } from '@/types';

export const labels = [
	{
		value: "bug",
		label: "Bug",
	},
	{
		value: "feature",
		label: "Feature",
	},
	{
		value: "documentation",
		label: "Documentation",
	},
];

export const statuses = [
	{
		value: "backlog",
		label: "Backlog",
		icon: CircleHelpIcon,
		withCount: true
	},
	{
		value: "todo",
		label: "Todo",
		icon: CircleIcon,
		withCount: true
	},
	{
		value: "in progress",
		label: "In Progress",
		icon: LoaderIcon,
		withCount: true
	},
	{
		value: "done",
		label: "Done",
		icon: CheckCircleIcon,
		withCount: true
	},
	{
		value: "canceled",
		label: "Canceled",
		icon: BanIcon,
		withCount: true
	},
] as Option[];

export const priorities = [
	{
		label: "Low",
		value: "low",
		icon: ArrowDownIcon,
	},
	{
		label: "Medium",
		value: "medium",
		icon: ArrowRightIcon,
	},
	{
		label: "High",
		value: "high",
		icon: ArrowUpIcon,
	},
];
