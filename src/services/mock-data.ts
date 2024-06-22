export type MockCopyPasteType = {
  id: number;
  content: string;
  description: string;
  category: string[];
};

export const MockCopyPastaOptions: string[] = ['common', 'chat', 'comment', 'neutral'];

export const MockCopyPasta: MockCopyPasteType[] = [
  {
    id: 1,
    content: `MỘT TƯ DUY HẾT SỨC LỆCH LẠC VÀ VÔ NHÂN

Người làm ra meme này, hoặc là trẻ tuổi kém trí, hoặc là tàn ác vô nhân. Mình không ưa những người dân chủ cuội, những người té nước theo mưa, hoặc chính trị cơ hội. Đây không phải là một điều đáng cười, nó đáng buồn. Hãy thử nghĩ về công an của bạn, nếu giả sử bạn đang bị hành hung, nhưng công an không đến giúp bạn chỉ vì sự khác biệt trong tư duy, tôn giáo, quan điểm chính trị của bạn, điều đó có đúng không? Các bạn sẽ bảo rằng, anh Sang chỉ nói lý thuyết, xã hội thực sự nó như vậy. Mình biết chớ. Nhưng xã hội vận hành như vậy, có đúng không? Xưa kia, xã hội cũng tin rằng, phù thủy phải bị thiêu sống, điều đó có đúng không? Tạo hoá cho mình cái não, hãy suy nghĩ. Nếu không, bạn sẽ chỉ đơn thuần là con sâu, cái kiến cho người khác lợi dụng.`,
    description: 'Dùng để sửa đổi tư duy',
    category: ['common', 'chat', 'comment', 'neutral']
  },
  {
    id: 2,
    content: `LỚN RỒI SỐNG KIẾP NGƯỜI ĐI RẢNH LỒN QUÁ ĐI SỐNG KIỂU THÚ VẬT CHI VẬY BẠN ƠI

Đéo hiểu sao nay bữa được mùa hay gì mà bị nứng lồn vậy con chó đẻ ? Loại m rác rưởi mà cứ nghĩ mình là tâm của xã hội , hôm nay lại còn bày đặt dãy lên toxic 😏 Nói cho mày biết , rác thì dù có cố làm tâm điểm như thế nào thì cũng chỉ là rác thôi , việc của mình lo còn chưa xong bày đặt chỉ dạy nhận xét người khác hahaha . Bình thường thì bố mày sẽ nhịn mày vì đôi ba lời nói của mày đéo có giá trị với bố mày nhưng hôm nay mày động đến anh em bạn bè của tao , sỉ nhục những người mà t xem trọng , nên tao phải chửi vào cái bản mặt chó mày , sống thì phải biết nhìn trước nhìn sau , oke ?

Thân gửi bạn nào đó tối nay giãy đành đạch toxic với anh em tao 😌`,
    description: 'Dùng để sống kiếp người đi',
    category: ['common', 'chat', 'comment']
  },
  {
    id: 3,
    content: '',
    description: '',
    category: []
  }
];
