import { get } from "../api/blog";

const BlogDetail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div class="nd1">
        <img src="${data.image}" alt="rectangle1">
        <p class="fs-3"><a href="">${data.title}</a></p>
        <p class="mt-2 ">${data.datetime}</p>
        <div class="text1"><p>${data.desc}</p></div>
        <br>
</div>

        `;
    },
};
export default BlogDetail;