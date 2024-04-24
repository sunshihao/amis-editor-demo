/**
 * @file 内置 svg 图标
 */
import {Icon, registerIcon} from 'amis';
// @ts-ignore
import PCPreview from './svg/pc-preview.svg';
// @ts-ignore
import H5Preview from './svg/h5-preview.svg';
registerIcon('pc-preview', PCPreview);
registerIcon('h5-preview', H5Preview);
// @ts-ignore
import CorpusI18n from './svg/corpus-i18n.svg';
registerIcon('corpus-i18n', CorpusI18n);
// @ts-ignore
import Back from './svg/back.svg';
registerIcon('back', Back);
// @ts-ignore
import fullscreen from './svg/fullscreen.svg'
registerIcon('fullscreen', fullscreen);
// @ts-ignore
import cannelscreen from './svg/cannelscreen.svg'
registerIcon('cannelscreen', cannelscreen);
export {Icon};
