import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const appConfigStr = `import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Emilus';
export const API_BASE_URL = env.API_ENDPOINT_URL
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';

export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_LTR
};
`

const lessConfigStr = `@blue-base:          #3e79f7;
@purple-base:        #a461d8;
@cyan-base:          #04d182;
@green-base:         #21B573;
@magenta-base:       #eb2f96;
@pink-base:          #eb2f96;
@red-base:           #de4436;
@orange-base:        #fa8c16;
@yellow-base:        #fadb14;
@volcano-base:       #ff6b72;
@geekblue-base:      #17bcff;
@lime-base:          #a0d911;
@gold-base:          #ffc542;

@primary-color:       @blue-base; 
@info-color:          @primary-color;
@success-color:       @cyan-base;
@processing-color:    @blue-base;
@error-color:         @volcano-base;
@highlight-color:     @volcano-base;
@warning-color:       @gold-base;
@normal-color:       #fafafb;
@white:              #fff;
@black:              #000;

@gray-dark:                 #1a3353;
@gray:                      #455560;
@gray-light:                #72849a;
@gray-lighter:              #ededed;
@gray-lightest:             #f7f7f8;

@colors-palette: {
	blue:     	  @blue-base;
	purple:       @purple-base;
	cyan:     	  @cyan-base;
	green:        @green-base;
	magenta:	    @magenta-base;
	pink:         @pink-base;
	red:          @red-base;
	orange:       @orange-base;
	yellow:       @yellow-base;
	volcano:      @volcano-base;
	geekblue:     @geekblue-base;
	lime:         @lime-base;
	gold:         @gold-base;
}

@theme-colors: {
	primary:        @primary-color;
	secondary:      @purple-base;
	success:        @success-color;
	info:           @info-color;
	warning:        @warning-color;
	danger:         @error-color;
	gray:           @gray;
	gray-light:     @gray-light;
	gray-lighter:   @gray-lighter;
	gray-lightest:  @gray-lightest;
  dark:           @gray-dark;
};
`

const darkThemeConfigStr = `
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'dark',
	direction: DIR_LTR
};
`

const directionConfigStr = `
export const THEME_CONFIG = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_RTL
}
`


const TemplateSetting = () => {
	return (
		<div>
			<h2>Template Setting</h2>
			<p>Emilus comes with a variety of different theme & layout, you can try them from quick view panel in our demo and copy the config to your project.</p>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Theme</h4>
				<p>You can change your theme setup from <code>src/configs/AppConfigs.js</code></p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {appConfigStr}
        </SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Config Colors</h4>
				<p>Theme Colors can be change in <code>src/assets/less/styles/variables/_color.less</code></p>
				<SyntaxHighlighter className="hl-code" language="less" style={atomDark}>
          {lessConfigStr}
        </SyntaxHighlighter>
			</div>
      <div className="mt-4">
				<h4 className="font-weight-bold">Use Dark Theme</h4>
        <p>Dark theme can be set via <code>src/configs/AppConfigs.js</code>.</p>
        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {darkThemeConfigStr}
        </SyntaxHighlighter>
      </div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Direction</h4>
        <p>Direction can be set by value <code>ltr</code> or <code>rtl</code> in <code>src/configs/AppConfigs.js</code>.</p>
        <SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {directionConfigStr}
        </SyntaxHighlighter>
      </div>
		</div>
	)
}

export default TemplateSetting
