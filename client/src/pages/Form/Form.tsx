import { Description } from "../../components/Description/Description";
import { InputForm } from "../../components/InputForm/InputForm";

export function FormPage() {
	return (
		<div className="w-full h-screen">
			<h1 className="text-2xl lg:text-5xl text-center italic p-3 m-3"
			> Healthy planet - healthy you </h1>
			<Description />
			<InputForm />
		</div>
	)
}