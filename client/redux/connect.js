import { connect } from "react-redux"
import store from "../redux/store"

export default (mapStateToProps, mapDispatchToProps, component) =>
  store(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(component)
  )
