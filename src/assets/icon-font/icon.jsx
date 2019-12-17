import React from 'react'

require('./icon/iconfont.js')//将下载文件中的iconfont.js引入

interface IProps {
  type: string
}

export default function Icon (props: IProps) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#${props.type}`} />
      <style jsx>{`
		.icon {
       		width: 1em; height: 1em;
       		vertical-align: -0.15em;
       		fill: currentColor;
       		overflow: hidden;
       	}
	  `}</style>
    </svg>
  )
}