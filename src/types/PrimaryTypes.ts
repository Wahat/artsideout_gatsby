import { ImageData } from './CustomTypes';

export interface InstallationData {
  remoteId: string;
  title: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageData[];
  profiles: ProfileData[];
}

export interface ProfileData {
  socialLink: any;
  name: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  remoteId: string;
  profileType: [];
  image: ImageData[];
  installations: InstallationData[];
  performances: ActivityData[];
}

export interface ActivityData {
  remoteId: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageData[];
  videoUrl: string;
  profiles: ProfileData[];
}

export interface VendorType {
  remoteId: string;
  title: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageData[];
}
