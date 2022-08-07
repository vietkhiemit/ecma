// import axios from "axios";
// import data from "../data";
import "toastr/build/toastr.min.css";
import { get } from "../../api/product";

const FeatureDetail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            <div class="nd1">
                <img src="${data.image}" alt="rectangle1" >
                    <p class="fs-4">${data.title}</p>
                <p class="mt-2  btn btn-success rounded-pil">${data.year}</p>
                <div class="text1"><p>${data.desc}</p></div>
            
                <br>
            </div>
        
            `;
    },

};
export default FeatureDetail;