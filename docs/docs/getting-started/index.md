---
title: Getting Started
sidebar_position: 4
description: Install Tetragon and begin exploring runtime events.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Start with a working Tetragon installation, then follow focused guides for the events and policies you want to observe.

<DocCardGrid>
  <DocCard title="Enforcement" description="Apply policies that observe and block selected runtime behavior." to="/docs/docs/getting-started/enforcement" />
  <DocCard title="Execution Monitoring" description="Observe process execution events from Kubernetes or Docker." to="/docs/docs/getting-started/execution" />
  <DocCard title="File Events" description="Monitor file access and enforce sensitive file operations." to="/docs/docs/getting-started/file-events" />
  <DocCard title="Install Docker" description="Run Tetragon directly on a Docker host." to="/docs/docs/getting-started/install-docker" />
  <DocCard title="Install Kubernetes" description="Create a cluster and deploy Tetragon with Helm." to="/docs/docs/getting-started/install-k8s" />
  <DocCard title="Network Monitoring" description="Observe network activity and distinguish internal from external destinations." to="/docs/docs/getting-started/network" />
</DocCardGrid>
