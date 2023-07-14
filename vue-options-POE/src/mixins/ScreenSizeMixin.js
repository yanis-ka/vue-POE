const ScreenSizeMixin = {
    data() {
        return {
          screenSize: {
            width: window.innerWidth,
            height: window.innerHeight 
          }
        }
    },
    mounted() {
        // attaché au navigateu
        window.addEventListener('resize', this.setScreenSize)
        this.setScreenSize();
    },
    beforeUnmount() {
        // nettoyage
        window.removeEventListener("resize", this.setScreenSize)

    },
    methods: {
      log() {
        console.log("ssishdfosqhfiozehf")
      },
      setScreenSize() {
        this.screenSize = {
            width: window.innerWidth,
            height: window.innerHeight 
          }
      }
    }

}
export default ScreenSizeMixin