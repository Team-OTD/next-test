import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
    const handleForm = async(formData) => {
        "use server";
        console.log(formData.get("email"), formData.get("password"))
    }
    return (
    <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">로그인</h1>
        <h2 className="text-xl">Login with email and password.</h2>
        </div>
        <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={[]}
        />
        <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={[]}
        />
        <FormButton
            loading={false}
            text="login"
        />
        </form>
        <SocialLogin />
    </div>
    );
}