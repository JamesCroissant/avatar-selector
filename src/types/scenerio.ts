import { TypeIcon as type, type LucideIcon } from "lucide-react"
import { Language } from "./Language"

export interface Scenario {
  id: string
  icon: LucideIcon
  translations: Record<Language, string>
}