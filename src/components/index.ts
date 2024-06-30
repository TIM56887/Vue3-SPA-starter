import SvgIcon from '@/components/SvgIcon/index.vue'
const allGlobalComponent = { SvgIcon }

export default {
  // @ts-ignore
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      // @ts-ignore
      app.component(key, allGlobalComponent[key])
    })
  }
}
