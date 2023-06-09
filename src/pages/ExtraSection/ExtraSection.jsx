/* eslint-disable react/no-unescaped-entities */
import img from '../../assets/img.png';
import img1 from '../../assets/template.png'
const ExtraSection = () => {
    return (
        <div className='mt-52'>
            <div className='relative'>
                <img src={img1} alt="" className='h-96 w-full' />
                <div className='absolute -top-40 '>
                    <img src={img} alt="" className='ml-96 pl-14' />
                    <p className='mt-16 ml-52 text-white font-bold text-3xl'>Make your children's life special by enrolling them br
                        in our academy</p>
                    <button className="btn btn-primary ml-52 mt-8">Enroll Your Child</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;