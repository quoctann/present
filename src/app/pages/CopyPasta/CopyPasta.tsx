import { Clipboard } from 'react-feather';
import { useLoaderData } from 'react-router';
import { getAllCopyPasta } from '../../../mocks/mock-api';
import { MockCopyPastaOptions, MockCopyPasteType } from '../../../mocks/mock-data';
import { useState } from 'react';

export async function loader(request: any) {
  console.log(request);
  const mockData = await getAllCopyPasta();
  return mockData;
}

const CopyPasta = () => {
  const loaderData = useLoaderData() as MockCopyPasteType[];
  const [data, setData] = useState(loaderData);

  const options = MockCopyPastaOptions;

  const onChangeCategory = (value: string) => {
    setData(data.filter((d) => d.category.includes(value)));
  };

  const copyToClipboard = async (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="p-8 prose max-w-full">
        <h2 className="text-center">
          văn mẫu để cân topic, áp đảo đối phương bằng ngôn từ <br />( ͡° ͜ʖ ͡°)ﾉ⌐■-■
        </h2>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Chọn chủ đề:</span>
          </div>
          <select
            className="select select-bordered"
            defaultValue={'default'}
            onChange={(event) => onChangeCategory(event.target.value)}>
            <option disabled value={'default'}>
              Bạn cần văn mẫu để làm gì?
            </option>
            {options.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <div className="divider"></div>

        {data?.length
          ? data.map((item) => (
              <details className="collapse bg-base-200 my-2" key={item.id}>
                <summary className="collapse-title text-xl font-medium">{item.description}</summary>
                <div className="collapse-content">
                  <p className="break-words whitespace-pre-wrap text-justify">{item.content}</p>
                  <button className="btn btn-neutral" onClick={() => copyToClipboard(item.content)}>
                    <Clipboard />
                    Sao chép ngay
                  </button>
                </div>
              </details>
            ))
          : ''}
      </div>
    </div>
  );
};

export default CopyPasta;
