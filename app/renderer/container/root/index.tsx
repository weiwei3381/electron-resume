import React, { useEffect } from 'react'
import './index.less'
import { useHistory } from 'react-router'
import Logo from '@assets/logo.png'
import { shell } from 'electron'
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router'
import { isHttpOrHttpsUrl } from '@common/utils/router'
import { useSelector, useDispatch } from 'react-redux'

function Root() {
  const dispath = useDispatch()
  const appName = useSelector((state: any) => state.globalModel.appName)

  useEffect(() => {
    setTimeout(() => {
      console.log('3s后修改')
      dispath({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'wowbat简历',
        },
      })
    }, 3000)
  }, [])

  useEffect(() => {
    console.log(appName)
  }, [appName])

  // 👇 通过 history.push 进行跳转
  const history = useHistory()

  const onRouterToLink = (router: TSRouter.Item) => {
    // 如果是外部链接，则通过浏览器打开
    if (isHttpOrHttpsUrl(router.url)) {
      // 通过 shell 模块，打开默认浏览器，
      shell.openExternal(router.url)
    } else {
      // 打开本地路由
      history.push(router.url)
    }
  }

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title" />
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div>{appName}</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            )
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By wowbat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
