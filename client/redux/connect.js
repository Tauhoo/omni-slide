import { connect } from "react-redux"
import store from "./store"

export default (mapStateToProps, mapDispatchToProps, component) =>
  store(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(component)
  )
