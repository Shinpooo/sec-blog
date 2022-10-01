

function ArticleLayout({ frontMatter, children }) {
    return (
        <>
            <h1>{frontMatter.title}</h1>
            {children}
        </>
    );
}x