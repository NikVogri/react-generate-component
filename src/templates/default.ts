export default [
	"import styles from './{{ComponentName}}.module.scss'",
	"\n",
	"\n",
	"interface {{ComponentName}}Props {",
	"}",
	"\n",
	"const {{ComponentName}}: React.FC<{{ComponentName}}Props> = ({}) => {",
	"\n",
	"	return <div>hello world</div>;",
	"\n",
	"};",
	"\n",
	"\n",
	"export default {{ComponentName}};",
];