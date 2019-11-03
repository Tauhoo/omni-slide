import validator from "validator"
import { login } from "../../utils/api"
import { Success } from "../../utils/alert"

export const login_handle = async function({ email, password }) {
  try {
    const validate_result = validate(email, password)

    if (validate_result.status === "warning")
      return this.setState({
        is_warning: true,
        warning: validate_result.detail,
        loading: false,
      })

    const { status, result, detail, type } = await login({
      email,
      password,
    })

    if (status === "error")
      return this.setState({
        warning: "Error can't login",
        is_warning: true,
        loading: false,
      })

    if (status === "warning") {
      if (type === "text")
        return this.setState({
          is_warning: true,
          warning: detail.text,
          loading: false,
        })
      return this.setState({
        is_warning: true,
        warning: "Data is invalid",
        loading: false,
      })
    }

    if (this.is_remember)
      localStorage.setItem("login", JSON.stringify({ email, password }))

    this.setState({ loading: false, visible: false }, () =>
      this.props.update_profile(result)
    )

    Success("Login success", "You can manage your folder and file now")
  } catch (e) {
    console.log(e)
    this.setState({
      loading: false,
      warning: "Error can't login",
      is_warning: true,
    })
    return { status: "error" }
  }
}

export const validate = (email, password) => {
  if (!validator.isEmail(email))
    return { status: "warning", detail: "Email is wrong." }

  if (typeof password !== "string")
    return { status: "warning", detail: "Password is invalid." }

  if (password.length > 100)
    return { status: "warning", detail: "Password too long." }

  if (password.length < 6)
    return { status: "warning", detail: "Password too short." }

  return { status: "success" }
}
