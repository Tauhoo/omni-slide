import React from "react"
import { Breadcrumb } from "antd"
import Link from "next/link"

export default ({ data }) => (
  <Breadcrumb>
    {data.map(([name, src], index) => (
      <Breadcrumb.Item>
        <Link prefetch href={src}>
          <a>{name}</a>
        </Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
)
