using System.Web;
using System.Web.Optimization;

namespace Talent
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));


            var semanticUiReact = "//cdnjs.cloudflare.com/ajax/libs/semantic-ui-react/0.87.2/semantic-ui-react.min.js";
            bundles.Add(new ScriptBundle("~/bundles/semantic-Ui-React", semanticUiReact).Include(
                "~/Scripts/semantic-ui-react.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            var semanticUi = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css";
            bundles.Add(new StyleBundle("~/Content/semantic-Ui", semanticUi).Include(
                      "~/Content/semantic-ui.css"));

        }
    }
}

