import type { ProjectCase, ProjectDetail } from '@/types/project';

export const KIMS_BC_OFFICE_CASES: ProjectCase[] = [
  {
    title:
      '214MB 사무실 모델을 원인별로 압축해 10.9MB로 줄이고, 체감 로딩을 분 단위에서 약 20초로 단축',
    problem:
      '사무실 내부 3D 모델이 214MB라 첫 로딩에 분 단위가 걸려 웹 배포가 어려웠고, 전시는 노트북 로컬 실행으로만 진행함',
    cause:
      'GLB 구조를 분석해 보니 용량의 84%가 지오메트리였고, 메시 하나에 전체 정점(478만 개)의 46%가 몰려 있었음. 다른 모델과 달리 이 모델에만 Draco 압축이 빠져 있었음',
    decision:
      '원인이 텍스처가 아니라 지오메트리라서, 모양이 변하지 않는 압축을 먼저 적용하고 단계마다 용량을 측정함. meshopt(60.1MB)보다 작은 Draco(44.7MB)를 선택',
    action:
      'gltf-transform으로 중복·미사용 데이터 제거 → Draco 압축 → WebP 텍스처 변환 → 허용 오차 0.1%로 메시 단순화(정점 478만 → 138만). 결과를 직접 실행해 확인하고, Draco 디코더는 CDN 대신 로컬 경로로 지정해 오프라인 환경에서도 열리게 함',
    result: '214MB → 10.9MB(-95%), 체감 로딩 분 단위 → 약 20초, 화면 품질 차이 없음',
  },
  {
    title:
      '카카오톡·라인 등 인앱 브라우저에서 모바일 명함 링크가 열리지 않던 문제를 외부 브라우저 전환으로 해결',
    problem:
      '출력한 명함의 QR이나 공유 링크를 카카오톡·라인 등 앱 안에서 열면 모바일 명함 페이지가 제대로 열리지 않음',
    cause:
      '앱에 내장된 인앱 브라우저는 일반 브라우저와 지원 범위가 달라, 같은 페이지라도 앱마다 동작이 달라짐',
    decision:
      '앱마다 다른 인앱 브라우저에 하나씩 맞추기보다, 각 앱이 제공하는 외부 브라우저 열기 방식으로 일반 브라우저에서 열리게 하기로 함',
    action:
      'User-Agent로 브라우저를 판별해 카카오톡은 kakaotalk://web/openExternal, 라인은 openExternalBrowser=1 파라미터, 삼성 인터넷은 안내 후 Chrome intent로 전환',
    result:
      '앱 안에서 링크를 눌러도 외부 브라우저로 넘어가 명함 조회와 앞·뒷면 이미지 저장을 할 수 있게 됨',
  },
];

export const KIMS_BC_OFFICE_DETAIL: ProjectDetail = {
  techStack: [
    {
      name: 'React Three Fiber',
      usedIn: 'Canvas·useFrame 기반 3D 씬 구성, GLB 모델 로드·애니메이션(useGLTF, useAnimations)',
    },
    {
      name: '@react-three/drei',
      usedIn: 'Html로 3D 공간에 말풍선·명함·iframe 모니터 화면 배치, occlude로 가림 처리',
    },
    {
      name: 'Rapier',
      usedIn: 'RigidBody·CapsuleCollider로 캐릭터 이동과 충돌, NPC kinematic 이동',
    },
    {
      name: 'three-stdlib',
      usedIn: 'Water 셰이더로 사무실 외부의 물 표현',
    },
    {
      name: 'GSAP',
      usedIn: '카메라 위치·회전 전환 연출, 명함 카드 등장 애니메이션',
    },
    {
      name: 'Zustand',
      usedIn: '오디오, 카메라, NPC, 오버레이, 로그인 상태를 store별로 분리해 관리',
    },
    {
      name: 'Google OAuth',
      usedIn: '@react-oauth/google로 로그인해 사용자별 명함 연동',
    },
    {
      name: 'qrcode.react',
      usedIn: '출력한 명함에 갤러리로 연결되는 QR 코드 생성',
    },
  ],
};
