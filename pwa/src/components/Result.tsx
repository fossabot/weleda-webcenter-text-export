function Result({ result }: any) {
    return(
        <div className="container mx-auto p-4">
            {result.split('\n').map((item: string, i: number) => (
                <p key={i} className="mb-4">{item}</p>
            ))}
        </div>
    );
}

export default Result;
