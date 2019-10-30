import { Modal } from "antd"

const { info, success, error, warning, confirm } = Modal

export const Confirm = (title, content) =>
  confirm({
    title,
    content,
    footer: [null, null],
    okText: "ok",
  })

export const Warning = (title, content) =>
  warning({
    title,
    content,
    footer: [null, null],
    okText: "ok",
  })

export const Error = (title, content) =>
  error({
    title,
    content,
    footer: [null, null],
    okText: "ok",
  })

export const Success = (title, content) =>
  success({
    title,
    content,
    footer: [null, null],
    okText: "ok",
  })

export const Info = (title, content) =>
  info({
    title,
    content,
    footer: [null, null],
    okText: "ok",
  })
