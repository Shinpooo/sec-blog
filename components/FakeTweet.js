function FakeTweet({ children }) {
    return (
        <div className="dark:bg-zinc-900">
            <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </div>
    );
}

export default FakeTweet;
