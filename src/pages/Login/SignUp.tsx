/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}


interface IFormInput {
  firstName: String
  gender: GenderEnum
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
    <Footer/>
    </>
  )
}

export default SignUp