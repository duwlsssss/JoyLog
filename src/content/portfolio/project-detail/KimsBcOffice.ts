import type { ProjectDetail } from '@/types/project';

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
