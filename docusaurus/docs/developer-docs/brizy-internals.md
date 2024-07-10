---
sidebar_position: 2
---

# Brizy Internals

Brizy operates on a core set of technologies we call the internals. In this section, we'll guide you through 
the key concepts necessary for developing addons for Brizy.

# Available "Internals"

Below is a list of Brizy internals along with a short description and links to more in-depth information:

[//]: # (TODO: Link for editor)
- [Brizy Editor](/docs-internals/brizy-editor/introduction)<br/>
The editor is where users create pages and control their settings. There are the panel, that hosts the list of widgets
and is where users control the settings. In editor we can change output view to `page`, `story` and `popup`.

[//]: # (TODO: Link for toolbar)
- [Toolbar](/docs-internals/toolbar)<br/>
The toolbar is used for adding controls to each widget, allowing for easy customization and configuration.
 
[//]: # (TODO: Link for sidebar)
- [Sidebar](/docs-internals/sidebar)<br/>
The sidebar is a place where we can access widgets, settings, and other controls. For example, we can adjust styles
via the sidebar.

- [CSS](/docs-internals/control-arguments/css)<br/>
Developers need to know how CSS works in Brizy. This mechanism allows users to easily adjust various CSS properties via two approaches: using `selector` and `style` parameters on controls.

[//]: # (TODO: Link for defaultValue)
- [Default Values](/docs-internals/default-value)<br/>
Elements in Brizy have their own default values, providing predefined settings for a consistent starting point.
This feature is used only for controls with the default parameter.

- [Controls](/docs-internals/editor-controls/introduction)<br/>
This section provides detailed information about all the controls available in the Brizy editor. These controls allow
users to input data, which can be used to customize and enhance their websites. In this section, you'll find 
descriptions, parameters, and examples for each control, helping you understand how to use and configure them 
effectively.These controls allow users to input data, which can be used to customize and enhance their websites. 
In this section, you'll find descriptions, parameters, and examples for each control, helping you understand how to
use and configure them effectively.
