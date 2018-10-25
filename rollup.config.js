import { version } from './package.json'
import buble from 'rollup-plugin-buble'

const banner = `/**
 * wx-jssdk v${version}
 * https://github.com/defypro/wx-jssdk
 * @license MIT
 */`

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/wx-jssdk.esm.js',
            format: 'es',
            banner
        }, {
            file: 'dist/wx-jssdk.common.js',
            format: 'cjs',
            banner
        }, {
            file: 'dist/wx-jssdk.js',
            format: 'umd',
            name: 'WxJssdk',
            banner
        }
    ],
    plugins: [buble()]
}