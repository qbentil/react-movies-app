const MovieItem = () => {
    return (
        <div className="w-[28rem] h-[18rem] bg-white rounded-lg">
            <video 
                className="w-full h-[85%] bg-black rounded-t-lg" 
                poster="https://assets1.ignimgs.com/thumbs/userUploaded/2022/4/15/toukenranbuwarriorsfourthteampvtrailerignblogroll-1650056487514_large.jpg" 
                controls 
                src="https://assets14.ign.com/videos/zencoder/2022/04/15/1280/0ee90b15b872657a75e0fc2024352f1a-1910000-1650056391.mp4"
            />
            <div className="pl-2 pt-2">
                <p className="text-xl font-semibold text-blue-900">Movie Title</p>
                
            </div>

        </div>
    )
}

export default MovieItem