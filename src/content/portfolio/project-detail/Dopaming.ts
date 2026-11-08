import type { ProjectCase } from '@/types/project';

export const DOPAMING_CASES: ProjectCase[] = [
  {
    title:
      '프로필 수정 후 잔여 휴가 등 폼에 없는 사용자 정보가 사라지던 문제를 Firebase 부분 갱신으로 해결',
    problem:
      '프로필을 수정하고 나면 폼에 없던 사용자 정보(잔여 휴가 등)가 사라지고, 빈칸으로 둔 항목도 빈 값으로 저장됨',
    cause:
      'Firebase Realtime DB의 set()은 해당 경로를 통째로 교체하는데, 폼 입력값만 담은 객체로 Users/{userId}를 덮어씀',
    decision:
      '폼에 있는 필드만 바꾸면 되므로 부분 갱신으로 전환하고, 빈 입력은 "변경 안 함"으로 해석',
    action:
      'set()을 update()로 바꾸고, 저장 전에 현재 사용자 데이터를 읽어 빈 입력이면 기존 값을 사용. 이미지도 새로 올리지 않았으면 기존 이미지를 유지',
    result: '프로필을 수정해도 폼에 없는 필드는 그대로 남고, 바꾼 항목만 저장됨',
  },
];
