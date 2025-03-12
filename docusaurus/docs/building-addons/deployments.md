---
sidebar_position: 5
---

# Deployments

After you have finished the custom widgets development, you can deploy your widgets to the Brizy platform.

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

4. **Use Brizy Scripts for Deployment**:
   - Utilize `brizy-scripts` for building and packaging your widget.
   - Run `brizy-scripts build` to compile the widget.
   - Run `brizy-scripts zip` to package the widget for deployment on the Brizy platform.

### Deployment Steps  

1. **Request Access**: Contact our [support](https://support.brizy.io) team to request access to the GitHub repository.
2. **Prepare Your Widget**: Ensure your widget is deployment-ready by adhering to the guidelines outlined in the [Custom Widgets Development](/docs/development/creating-your-first-addon) section.
3. **Push to GitHub**: Fork the Brizy platform's repository and upload your widget code to your fork.
4. **Create a Pull Request**: Open a pull request in the Brizy platform's repository to integrate your widget.
5. **Review and Merge**: Await the Brizy team’s review of your pull request. Once approved, it will be merged into the platform.


## Additional Resources

- [Brizy Documentation](https://builder-docs.brizy.io/docs/getting-started/what-is-brizy/)
- [Brizy Support](https://support.brizy.io)
