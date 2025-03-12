---
sidebar_position: 5
---

# Brizy.io Cloud

Using Third Party Widgets inside Brizy.io Cloud.
If you want to deploy your widgets to the Brizy.io Cloud platform, you must understand some basic information about the platform.

1. You need to have a Brizy.io account with White Labeling enabled.
2. Widgets for Brizy.io must follow the same folder structure as Brizy-Local-Editor.
3. Widgets work in the same way as Brizy-Local-Editor. You can test them on Brizy-Local-Editor before deploying to the Brizy.io Cloud platform.

### How Does It Work?
Your widgets will be deployed to the Brizy.io Cloud platform, where they can be used by Brizy.io users within your white-labeled platform.
The deployment process involves packaging your widget into a zip file and uploading it to the Brizy.io Cloud platform.
See deployment instructions in the section [Deployment](#deployment-steps).

### Before Deployment

1. **Test Locally**:
   - Verify that your widget operates correctly within the Brizy Local Editor to avoid deployment issues.

2. **Update `config.json`**:
   - Ensure the `config.json` file is correctly formatted and includes all required fields.
   - Change `Brizy.Thirdparty` to your brand name to uniquely identify your widget.
   - Assign a unique version number for every new version of the widget.

3. **Ensure Unique Component Registration**:
   - When using `Brizy.registerComponent()`, ensure that every ID for your widget is unique.
   - Follow the naming convention: `yourBrandName.WidgetName`.

### Deployment Steps

1. **Prepare Your Widget**: Ensure your widget is deployment-ready by adhering to the guidelines outlined in the [Custom Widgets Development](/docs/development/creating-your-first-addon) section.
2. **Use Brizy Scripts for Deployment**:
   - Utilize `brizy-scripts` for building and packaging your widget.
   - Run `brizy-scripts build` to compile the widget.
   - Run `brizy-scripts zip` to package the widget for deployment on the Brizy platform.
3. **Deploying on Brizy Platform**: Send your widget(zip file) to the Brizy team for review. Once approved, it will be deployed into the platform.

### How to Update Your Widget
Updating widgets follows the same steps as the deployment process described above.

- Updates to widgets on Brizy.io are **lazy**. This means when a new version of your widget is published, it will automatically update in Brizy.io Editor Mode but not in Preview Mode.
- To see the updated widget in Preview Mode, the client must manually update the page and switch to Preview Mode.

## Additional Resources

- [Brizy Documentation](https://builder-docs.brizy.io/docs/getting-started/what-is-brizy/)
- [Brizy Support](https://support.brizy.io)
