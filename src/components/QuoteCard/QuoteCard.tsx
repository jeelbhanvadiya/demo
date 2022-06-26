import { FC } from "react"
import { QuoteDetails } from "../../utils/Interface";
import './QuateCard.scss'

interface IQuoteCardProps {
    quoteDetail: QuoteDetails;
}

const QuoteCard: FC<IQuoteCardProps> = ({ quoteDetail } : IQuoteCardProps) => (
    <div className="quote-detail">
        <div className='card-content'>
            <div>
                <span className='author'>{quoteDetail?.author ||''}</span>
                <span className='author-slug'>{quoteDetail?.authorSlug || ''}</span>
            </div>
            <div className='date-added'>
                {quoteDetail?.dateAdded ||''}
            </div>
        </div>
        <div className='description'>{quoteDetail?.content || ''}</div>
    </div>
);

export default QuoteCard