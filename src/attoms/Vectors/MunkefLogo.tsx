import * as React from "react"
import { SVGProps } from "react"
type props = {
    color?:string;
}&SVGProps<SVGSVGElement>

const MunkefLogo = (props:props) => {
    console.log(props.color)
    return(
        <svg
    width={55}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.478 9.708 16.796.44 38.76.48l9.266 9.317-.037 24.906-9.318 9.266-21.964-.037-9.267-9.318.038-24.905Z"
      stroke={`${props.color}`||'#FFFFFF'}
      strokeWidth={0.882}
    />
    <path
      d="m15.286 14.333 5.756-5.775 13.56.023 5.724 5.808-.023 15.516-5.756 5.775-13.56-.023-5.724-5.808.023-15.516Z"
      stroke={`${props.color}`||'#FFFFFF'}
      strokeWidth={0.525}
    />
    <path
      d="M32.5 20.354a4.853 4.853 0 0 0 4.824-5.39 3.84 3.84 0 1 1-4.287-4.287 4.853 4.853 0 1 0-.537 9.676Z"
      fill={`${props.color}`||'#FFFFFF'}
    />
    <path
      d="M27.502 44.086c8.806-.053 17.032.503 27.235 1.712v5.407H.263v-5.407c10.203-1.21 18.43-1.765 27.235-1.712h.004Z"
      stroke={`${props.color}`||'#FFFFFF'}
      strokeWidth={0.525}
    />
    <path
      d="M20.701 45.88v3.203h-1.287v-1.768l-.874 1.768h-1.078l-.88-1.781v1.78h-1.288V45.88h1.557l1.163 2.082 1.137-2.082h1.55ZM23.291 45.88v1.858c0 .172.057.306.171.4.118.094.296.14.532.14.237 0 .414-.046.532-.14a.482.482 0 0 0 .184-.4v-1.859h1.288v1.859c0 .294-.09.545-.27.754-.179.206-.424.362-.735.468a3.206 3.206 0 0 1-1.025.155c-.377 0-.714-.052-1.012-.155a1.576 1.576 0 0 1-.696-.468 1.162 1.162 0 0 1-.25-.754v-1.859h1.281ZM30.042 49.083l-1.452-1.404v1.404h-1.288v-3.204h1.288v1.382l1.439-1.382h1.485l-1.702 1.554 1.787 1.65h-1.557ZM33.953 46.593v.522h1.478v.677h-1.478v.578h1.675v.713h-2.963v-3.204h2.963v.714h-1.675ZM40 45.88v.708h-1.853v.564h1.367v.677h-1.367v1.254H36.86v-3.204H40Z"
      fill={`${props.color}`||'#FFFFFF'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.318 23.934c-.324.042-.674.127-2.505.614-.304.081-.757.173-1.006.205l-.452.058-.778 1.48c-.428.813-.96 1.798-1.182 2.189-.298.523-.44.84-.542 1.199a31.92 31.92 0 0 1-.248.835c-.073.228-.093.365-.06.398.05.05 6.607-.021 7.922-.086l.583-.028.084-.158c.154-.29.293-.396.516-.396.182 0 .228.028.421.257l.216.256h4.326c4.69 0 4.493.012 4.422-.27-.016-.064-.171-.312-.346-.55-.174-.238-.339-.512-.366-.608-.026-.097-.362-.722-.745-1.39-.643-1.12-1.496-2.754-1.577-3.02-.027-.09-.086-.12-.275-.145-.536-.07-1.112-.199-2.065-.464-1.284-.356-1.843-.453-2.44-.42-.53.028-.946.157-1.335.415l-.261.174-.126-.104c-.217-.178-.729-.39-1.076-.445-.382-.061-.597-.06-1.105.004Zm1.305.123c.35.083.769.286.909.44.076.084.08.313.045 2.538l-.038 2.446-.186-.178c-.235-.226-.527-.372-.968-.485-.29-.074-.576-.088-1.709-.085-1.192.003-1.588.027-3.2.194-1.013.106-1.95.185-2.084.177l-.244-.016.454-.815c.25-.448.723-1.326 1.05-1.951.818-1.563.754-1.47 1.011-1.471.267 0 1.046-.176 2.144-.482 1.4-.391 2.135-.472 2.817-.312Zm4.319.146c1.71.46 2.268.595 2.582.627l.335.034.492.982c.27.54.778 1.48 1.127 2.087l.635 1.104-.46.015c-.257.008-1.128-.054-1.982-.14-2.282-.234-3.216-.283-4.014-.213-.966.086-1.486.258-1.838.61l-.19.19.013-1.258c.042-4.025.029-3.686.142-3.774.17-.133.496-.295.796-.395.233-.078.401-.091.975-.075.597.017.79.046 1.387.206Zm-5.375 4.604c.91.075 1.383.216 1.695.505.134.125.32.415.281.437-.009.006-.102.049-.207.097-.164.074-.459.395-.513.558-.011.034-.07.032-.168-.006-.083-.031-.487-.082-.898-.114-.73-.055-2.05-.03-5.805.113-.635.024-1.17.034-1.187.023-.019-.011.041-.28.133-.599l.166-.579.482-.04a166.8 166.8 0 0 0 2.023-.195c1.37-.14 2.461-.224 3.159-.244.127-.004.505.016.84.043Zm6.736.05c.282.028.964.1 1.515.158.55.057 1.311.12 1.69.14l.688.036.165.63.165.628h-.237c-.13-.001-.907-.036-1.726-.077-3.097-.158-4.94-.157-5.958.003-.134.022-.172-.002-.293-.18-.135-.198-.465-.413-.632-.413-.148 0 .128-.411.386-.576.27-.173.768-.334 1.236-.4.397-.055 2.283-.024 3.001.05Zm-8.577.16a38.8 38.8 0 0 0-1.592.198 33.96 33.96 0 0 1-2.49.279c-.156.01.145.012.667.004.77-.011 1.18-.048 2.157-.194a28.374 28.374 0 0 1 1.772-.215c.917-.057 1.936.095 2.696.402.17.069.308.116.308.106 0-.01-.137-.089-.305-.174-.774-.39-1.827-.523-3.213-.405Zm5.778.052c-.416.068-1.085.29-1.314.438-.214.137-.204.135.39-.085 1.103-.409 2.256-.41 4.915-.006.874.133 1.718.185 2.1.13.282-.04.252-.045-.416-.079a24.376 24.376 0 0 1-1.797-.192 60.34 60.34 0 0 0-1.578-.21c-.588-.063-1.898-.061-2.3.004Zm-6.082.305c-.252.026-.934.117-1.515.201-1.24.18-2.15.266-2.441.23-.186-.023-.194-.02-.08.032.224.1 1.56.024 2.671-.15 1.406-.221 2.09-.282 2.776-.246.621.032 1.388.195 1.826.389.133.059.253.095.268.081.048-.048-.659-.337-1.083-.442-.497-.123-1.699-.17-2.422-.095Zm6.724 0c-.585.056-1.053.175-1.493.379-.385.177-.546.307-.189.151 1.104-.48 2.288-.558 4.228-.277.605.087 1.135.169 1.177.181.2.057 1.498.12 1.772.085.29-.036.27-.04-.334-.072a28.397 28.397 0 0 1-1.9-.215c-1.122-.162-2.466-.298-2.747-.28a30.62 30.62 0 0 0-.514.047Zm-6.754.39c-.127.012-.869.114-1.65.225-.917.132-1.615.205-1.977.207-.436.002-.53.015-.43.056.207.086 1.528.012 2.414-.134 1.692-.28 2.574-.34 3.367-.23.413.057 1.04.229 1.37.375.107.047.193.071.193.055 0-.063-.764-.375-1.13-.46-.38-.09-1.63-.144-2.157-.094Zm6.864.02a4.082 4.082 0 0 0-1.33.369c-.43.196-.426.24.006.064 1.066-.433 2.16-.465 4.294-.124 1.091.175 1.88.24 2.416.202.35-.026.346-.027-.232-.063a36.356 36.356 0 0 1-2.028-.24c-1.54-.22-2.478-.282-3.126-.209Z"
      fill={`${props.color}`||'#FFFFFF'}
    />
  </svg>
    )

}
  


export default MunkefLogo