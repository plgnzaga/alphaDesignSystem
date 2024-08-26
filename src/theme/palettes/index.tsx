export type ColorScheme = {
    shade:number,
    hexCode:string,
    textColor:string,
    colorGroup:string,
    main?:boolean
}
export const primaryColors:Partial<ColorScheme>[] = [
  { shade: 300, hexCode: '#e1a5ff', textColor: '#282828',colorGroup:'Purple'},
  { shade: 400, hexCode: '#ce6cff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 500, hexCode: '#bc35ff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 600, hexCode: '#ac0fff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 700, hexCode: '#a100ff', textColor: '#fefefe',colorGroup:'Purple',main:true },
  { shade: 800, hexCode: '#8006c3', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 900, hexCode: '#69079c', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 950, hexCode: '#480076', textColor: '#fefefe',colorGroup:'Purple'},
];

export const secondaryColors: Partial<ColorScheme>[] = [
    { shade: 300, hexCode: '#88dbff', textColor: '#282828',colorGroup:'Blue'},
    { shade: 400, hexCode: '#50c5ff', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 500, hexCode: '#28a7ff', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 600, hexCode: '#1e90ff', textColor: '#fefefe',colorGroup:'Blue',main:true },
    { shade: 700, hexCode: '#0a71eb', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 800, hexCode: '#0f5abe', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 900, hexCode: '#134e95', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 950, hexCode: '#11305a', textColor: '#fefefe',colorGroup:'Blue'},
];

export const successColors: Partial<ColorScheme>[] =  [
    { shade: 50, hexCode: '#edfcf4', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 100, hexCode: '#dbf6e3', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 200, hexCode: '#aeeccb', textColor: '#282828',colorGroup:'Green'},
    { shade: 300, hexCode: '#78ddae', textColor: '#282828',colorGroup:'Green'},
    { shade: 400, hexCode: '#42c58c', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 500, hexCode: '#23c483', textColor: '#fefefe',colorGroup:'Green',main:true},
    { shade: 600, hexCode: '#15a44f', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 700, hexCode: '#148141', textColor: '#fefefe',colorGroup:'Green'},
]

export const warningColors: Partial<ColorScheme>[] = [
    {shade:50, hexCode:'#fdfee8', textColor:'#282828',colorGroup:'Yellow'},
    {shade:100, hexCode:'#fbffc2', textColor:'#282828',colorGroup:'Yellow'},
    {shade:200, hexCode:'#fcff89', textColor:'#282828',colorGroup:'Yellow'},
    {shade:300, hexCode:'#fffd63', textColor:'#282828',colorGroup:'Yellow',main:true},
    {shade:400, hexCode:'#fdf012', textColor:'#282828',colorGroup:'Yellow'},
    {shade:450, hexCode:'#feed18', textColor:'#282828',colorGroup:'Yellow'},
    {shade:500, hexCode:'#ffd700',textColor:'#282828',colorGroup:'Yellow'},
    {shade:600, hexCode:'#ffc107', textColor:'#282828',colorGroup:'Yellow'},
];
  
export const dangerColors: Partial<ColorScheme>[] =  [
    {shade:300, hexCode:'#ffa0aa', textColor:'#282828',colorGroup:'Red'},
    {shade:400, hexCode:'#ff6b7e', textColor:'#fefefe',colorGroup:'Red'},
    {shade:500, hexCode:'#fb3855', textColor:'#fefefe',colorGroup:'Red'},
    {shade:600, hexCode:'#dc143c', textColor:'#fefefe',colorGroup:'Red',main:true},
    {shade:700, hexCode:'#c50b34', textColor:'#fefefe',colorGroup:'Red'},
    {shade:800, hexCode:'#a50c33', textColor:'#fefefe',colorGroup:'Red'},
    {shade:900, hexCode:'#8d0e33', textColor:'#fefefe',colorGroup:'Red'},
    {shade:950, hexCode:'#4f0217', textColor:'#fefefe',colorGroup:'Red'},
];

export const lightColors: Partial<ColorScheme>[] =  [
    {shade:10, hexCode:'#fbfbfc', textColor:'#282828',colorGroup:'Light',main:true},
    {shade:30, hexCode:'#f9fafb', textColor:'#282828',colorGroup:'Light'},
    {shade:50, hexCode:'#f8f9fa', textColor:'#282828',colorGroup:'Light'},
    {shade:100, hexCode:'#eceff2', textColor:'#282828',colorGroup:'Light'},
    {shade:200, hexCode:'#d5dde2', textColor:'#282828',colorGroup:'Light'},
    {shade:300, hexCode:'#b0bfc9', textColor:'#282828',colorGroup:'Light'},
    {shade:400, hexCode:'#a0afba', textColor:'#282828',colorGroup:'Light'},
    {shade:500, hexCode:'#959596', textColor:'#fefefe',colorGroup:'Light'},
];

export const darkColors: Partial<ColorScheme>[] =  [
    {shade:300, hexCode:'#a4a4a4', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:400, hexCode:'#818181', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:500, hexCode:'#666666', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:600, hexCode:'#515151', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:700, hexCode:'#434343', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:800, hexCode:'#383838', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:900, hexCode:'#282828', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:950, hexCode:'#1a1a1a', textColor:'#fefefe',colorGroup:'Dark',main:true},
];
