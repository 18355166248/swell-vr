import {buildUtils} from '@swellvr/vr-core'
import {minifyConfig, unMinifyConfig, pkgPath} from '../vite.config'

buildUtils.build({minifyConfig, unMinifyConfig, packagePath: pkgPath})
