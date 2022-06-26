import { useEffect, useState, FC } from "react"
import QuoteCard from "../QuoteCard/QuoteCard";
import { getQuoteList } from '../../services/api'
import { QuoteDetails } from "../../utils/Interface";
import './QuoteFeed.scss'

const QuoteFeed: FC = () => {
    const [quoteList, setQuoteList] = useState<QuoteDetails[]>([]);
    const [count, setCount] = useState<number>(1);

    const fetchQuoteList = async (count) => {
        const result = await getQuoteList(count);
        if(result.length){
            setQuoteList([...quoteList, ...result])
        }
    };

    useEffect(() => {
        fetchQuoteList(count);
    }, []);

    const handleLoadMore = () => {
        setCount((prev) => prev + 1);
        fetchQuoteList(count + 1)
    };

    return (
        <div className='quote-detail-main'>
            <div className='pt-30'>
                <div className="quote-feed">
                    <div className='quote-feed-scroll'>
                        <div className='title'>Hello, here are your morning quotes!</div>
                        {
                            quoteList?.map((quote: QuoteDetails, index: number) => (
                                <QuoteCard quoteDetail={quote} key={index}/>
                            ))
                        }
                    </div>
                    <div className='load-more' onClick={handleLoadMore}>Load More</div>
                </div>
            </div>
        </div>
    )
};

export default QuoteFeed