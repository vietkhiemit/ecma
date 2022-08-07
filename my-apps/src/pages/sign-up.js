import toastr from "toastr";
import Footer from "../components/Footer";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";

const Signup = {
    render() {
        return /* html */`
        
       
                    
                    <form id="formSignup">
                                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                                Sign up
                                </h1>
                                <div>
                                <label class="block text-sm">
                                    Name
                                </label>
                                <input id="username"
                                    type="text"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Name" />
                                </div>
                                <div class="mt-4">
                                <label class="block text-sm">
                                    Email
                                </label>
                                <input id="email"
                                    type="email"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Email Address" />
                                </div>
                                <div>
                                <label class="block mt-4 text-sm">
                                    Password
                                </label>
                                <input id="password"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="Password" type="password" />
                                </div>
                                <button
                                class="btn btn-danger"
                                href="#">
                                Sign up
                                </button>
                
                                <div class="mt-4 text-center">
                                <p class="text-sm">Have an account already? <a href="sign-in"
                                    class="text-blue-600 hover:underline"> Sign in.</a></p>
                                </div>
                                </div>
                            </div>
                    </form>
        
        ${Footer.render()}
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    console.log(data.user);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Sign Up Success !");
                    setTimeout(() => {
                        document.location.href = "/sign-in";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;