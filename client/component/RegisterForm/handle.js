import validator from "validator"
import { register } from "../../utils/api"
import { Error, Success } from "../../utils/alert"

export const register_handle = async function({
  email,
  username,
  password,
  re_password,
}) {
  try {
    const validate_result = validate(email, username, password, re_password)

    if (validate_result.status === "warning")
      return this.setState({
        is_warning: true,
        warning: validate_result.detail,
        loading: false,
      })

    const { status, result, detail, type } = await register({
      email,
      username,
      password,
    })

    if (status === "error")
      return this.setState({
        warning: "Error can't register",
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
      console.log(detail)
      return this.setState({
        is_warning: true,
        warning: "Data is invalid",
        loading: false,
      })
    }

    this.setState({ loading: false }, () => this.props.update_profile(result))
    Success("Register success", "You can create your folder and file now")
  } catch (e) {
    console.log(e)
    return { status: "error" }
  }
}

export const validate = (email, username, password, re_password) => {
  if (!validator.isEmail(email))
    return { status: "warning", detail: "Email is wrong." }

  if (typeof username !== "string")
    return { status: "warning", detail: "Username is invalid." }

  if (username.length > 30)
    return { status: "warning", detail: "Username too long " }

  if (username.length < 6)
    return { status: "warning", detail: "Username too short." }

  if (typeof password !== "string")
    return { status: "warning", detail: "Password is invalid." }

  if (password.length > 100)
    return { status: "warning", detail: "Password too long." }

  if (password.length < 6)
    return { status: "warning", detail: "Password too short." }

  if (typeof re_password !== "string")
    return { status: "warning", detail: "Re password is invalid." }

  if (re_password.length > 100)
    return { status: "warning", detail: "Re password too long." }

  if (re_password.length < 6)
    return { status: "warning", detail: "Re password too short." }

  if (re_password !== password)
    return {
      status: "warning",
      detail: "Re password and password isn't equal.",
    }

  return { status: "success" }
}
