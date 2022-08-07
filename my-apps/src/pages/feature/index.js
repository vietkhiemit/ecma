import { getAll } from "../../api/product";

const Feature = {
    async render() {
        const { data } = await getAll();
        return /* html */`
                ${data.map((item) => /* html */`
                    <div class="nd1">
                        <img src="${item.image}" alt="rectangle1">
                        <p class="fs-4"><a href="/#/feature-detail/${item.id}">${item.title}</a></p>
                        <p class="mt-2  btn btn-success rounded-pil">${item.year}</p>
                        <div class="text1"><p>${item.desc}</p></div>
                        <hr>
                        <br>
                    </div>
                `).join("")}
        `;
    },
};
export default Feature;