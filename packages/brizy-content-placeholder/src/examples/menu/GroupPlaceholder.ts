import { BasePlaceholder } from "../BasePlaceholder"
import { ContextInterface } from "../../modules/ContextInterface"
import { ContentPlaceholder } from "../../modules/ContentPlaceholder"

export class GroupPlaceholder extends BasePlaceholder {
  constructor() {
    super("Group Placeholder", "group")
  }
  async getValue(context: ContextInterface, placeholder: ContentPlaceholder) {
    const content = placeholder.getContent()
    const replacer = this.getReplacer()
    return replacer
      ? await replacer.replacePlaceholders(content ?? "", context)
      : ""
  }
}
