---
sidebar_position: 2
---

# Brizy Internals

Brizy operates on a core set of technologies we call the internals. In this section, we'll guide you through
the key concepts necessary for developing widgets for Brizy.

# Available Docs

The following provides a summary of Brizy's core components, accompanied by references to detailed documentation for further exploration:

- [**Brizy Editor**](/docs-internals/brizy-editor/introduction)<br/>
  The editor is the environment where users customize their page layout and content. There are the panel, that hosts the list of widgets
  and is where users control the settings. In editor we can change output view to `page`, `story` and `popup`.
- **Managers** <br/>
  Brizy's framework employs specialized handlers to dynamically add and remove components. Third-party developers must leverage these handlers to integrate their custom elements, ensuring their compatibility and accessibility within the Brizy ecosystem.
- **Scripts & Styles** <br/>
  Developers must understand the intricacies of how Brizy modules incorporate custom JavaScript and CSS stylesheets. Given the potential performance implications of these files, it is crucial to adopt optimized loading strategies tailored to each module type.
- **Deprecations** <br/>
  As software evolves, code segments may become obsolete or superseded. Brizy's lifecycle management involves a phased deprecation process. Developers should familiarize themselves with Brizy's deprecation guidelines and understand the necessary steps to identify, troubleshoot, and migrate deprecated code.
- **Building Widgets** <br/>
  If you're new to Brizy and want to learn how to create custom React components, this section is for you. We'll provide a clear overview of the basics and guide you through the process of integrating them into the builder.
