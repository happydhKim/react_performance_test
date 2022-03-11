import { rest } from 'msw';

export const handlers = () => {
  return [
    rest.get('/api/user', getUserInformation),
    rest.get('/api/first', getFirstInfo),
    rest.get('/api/second', getSecondInfo),
    rest.get('/api/third', getThirdInfo),
    rest.get('/api/fourth', getFourthInfo),
  ];
};

const getUserInformation: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: '김도현',
      age: 7,
    })
  );
};

const getFirstInfo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      description: '첫 번째 테스트....',
    })
  );
};

const getSecondInfo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      description: '두 번째 테스트....',
    })
  );
};

const getThirdInfo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      description: '세 번째 테스트....',
    })
  );
};

const getFourthInfo: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      description: '네 번째 테스트....',
    })
  );
};