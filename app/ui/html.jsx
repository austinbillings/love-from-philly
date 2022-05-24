export const Html = ({ code = '', ...rest }) => {
    return (
        <span
            {...rest}
            dangerouslySetInnerHTML={{ __html: code }}
        />
    )
}
