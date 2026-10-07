export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  return <a className={`btn btn-${variant} ${className}`} href={href} {...rest}>{children}</a>
}
