import Navigo from "navigo";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import FeatureDetail from "./pages/feature/FeatureDetail";
import Feature from "./pages/feature";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";
import BlogDetail from "./components/BlogDetail";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/blog": () => print(Blog),
    "/feature": () => print(Feature),
    "/sign-in": () => print(Signin),
    "/sign-up": () => print(Signup),
    "/feature-detail/:id": ({ data }) => {
        print(FeatureDetail, data.id);
    },
    "/blogs-detail/:id": ({ data }) => {
        print(BlogDetail, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();